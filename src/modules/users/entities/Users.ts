import {
	Column,
	CreateDateColumn,
	Entity,
	ObjectIdColumn,
    ObjectId,
    UpdateDateColumn,
} from 'typeorm'

@Entity('users')
export class Users {
	@ObjectIdColumn()
    id: ObjectId

	@Column({ type: 'text' })
	name: string

	@Column({ type: 'text', nullable: true })
	email: string

    @Column({ type: 'text', nullable: true })
	password: string

    @Column()
	status: Boolean

    @CreateDateColumn()
	created_at: Date

    @UpdateDateColumn()
	updated_at: Date

}
