import {
	Column,
	CreateDateColumn,
	Entity,
	ObjectIdColumn,
    ObjectId,
    UpdateDateColumn,
} from 'typeorm'


@Entity('heroes')
export class Heroes {
	@ObjectIdColumn()
    id: ObjectId

	@Column({ type: 'text' })
	name: string

	@Column({ type: 'text', nullable: true })
	nickname: string

    @Column({ type: 'text', nullable: true })
	birthday: string

    @Column({ type: 'text' })
	id_users: string

    @Column({type:"json",nullable: true})
    weapons: {
        name: string;
        mod: number;
        attr: string;
        equipped: boolean
    }

    @Column({type:"json",nullable: true})
    attributes: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number,
        wisdom: number;
        charisma:number
    }

    @Column({ type: 'text', nullable: true })
	keyAttribute: string

    @CreateDateColumn()
	created_at: Date

    @UpdateDateColumn()
	updated_at: Date



}
