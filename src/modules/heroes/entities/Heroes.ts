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
	@ObjectIdColumn({ type: 'text'})
    id: string

	@Column({ type: 'text',nullable: false })
	name: string

	@Column({ type: 'text', nullable: false })
	nickname: string

    @Column({ type: 'text', nullable: false })
	birthday: string

    @Column({ type: 'text',nullable: false })
	id_users: string

    @Column({type:"json",nullable: false})
    weapons: {
        name: string;
        mod: number;
        attr: string;
        equipped: boolean
    }

    @Column({type:"json",nullable: false})
    attributes: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number,
        wisdom: number;
        charisma:number
    }

    @Column({ type: 'text', nullable: false })
	keyAttribute: string

    @Column({ type: 'boolean',nullable: false })
	status: number

    @CreateDateColumn()
	created_at: Date

    @UpdateDateColumn()
	updated_at: Date



}
