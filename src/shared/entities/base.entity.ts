import {
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class EntityBase {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @CreateDateColumn({
    name: 'created_at',
    precision: 0,
    default: () => 'NOW()',
  })
  readonly createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    precision: 0,
    default: () => 'NOW()',
    onUpdate: 'NOW()',
  })
  readonly updatedAt: Date;
}
