import { Request, Response } from 'express'
import { createAnQuery } from '@shared/querys';
import { repositoryClient } from '../../client/repositories/ClientRepository'


export  default class OptimizeRouteController {
	

    async show(req: Request, res: Response) {
		const  {id}  = req.params;
		try {
			const clientExists = await createAnQuery(`SELECT * FROM ${repositoryClient} WHERE id_users=${id} and status=true `)
			if (clientExists.rowCount == 0) {
                return res.status(200).json( {status:200,menssage:'There are no client'} );
			}
            function calcularDistancia(lat1:number, lon1:number, lat2:number, lon2:number) {
				const R = 6371; // raio médio da Terra em quilômetros
				const dLat = toRad(lat2 - lat1);
				const dLon = toRad(lon2 - lon1);
				const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
						Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
						Math.sin(dLon / 2) * Math.sin(dLon / 2);
				const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
				const distancia = R * c;
			  
				return distancia;
			  }
			  
			  function toRad(graus:number) {
				return graus * (Math.PI / 180);
			  }
			  
			  // Exemplo de uso,os dois primeiros parametros sao da localizacao inicial ou seja da empresa prestadora, os proximos dois sao dos clientes
			  const distanciaEntrePontos = calcularDistancia(0, 0, -20.522490, -40.736600);
			//   console.log(`Distância entre pontos: ${distanciaEntrePontos.toFixed(2)} km`);
			 
			  let clientRoutesArray = [];

			for (let index = 0; index < clientExists.rows.length; index++) {
				let clientRoutes = clientExists.rows[index];
				let distancia = calcularDistancia(0, 0, clientExists.rows[index].coordenada_x, clientExists.rows[index].coordenada_y);
				clientRoutes.distancia = distancia.toFixed(2);

				// Adicione o cliente atual ao array
				clientRoutesArray.push(clientRoutes);
			}
			 
			
			function compare(a: any, b: any) {
				// Converta as distâncias para números antes de comparar
				const distanciaA = parseFloat(a.distancia);
				const distanciaB = parseFloat(b.distancia);
			
				if (distanciaA < distanciaB)
					return -1;
				if (distanciaA > distanciaB)
					return 1;
				return 0;
			}
			clientRoutesArray.sort(compare);			

			return res.status(200).json({status:200,client:clientRoutesArray})
		} catch (error) {
			console.log(error)
			return res.status(500).json({status:0, message: 'Internal Sever Error' })
		}
	}
}
