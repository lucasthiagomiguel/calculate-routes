import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'

@Entity('documents')
export class Documents {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'text' })
	name: string

	@Column({ type: 'text', nullable: true })
	type_documents: string

    @Column({ type: 'text', nullable: true })
	document_content: string

    @Column({ type: 'text', nullable: true })
	document_image: string

	@Column()
	id_users: number

    @Column()
	status: Boolean

    @CreateDateColumn()
	created_at: Date

    @UpdateDateColumn()
	updated_at: Date

}
