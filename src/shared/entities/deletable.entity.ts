import { DeleteDateColumn } from 'typeorm';
import { EntityBase } from './base.entity';

export class DeletableEntity extends EntityBase {
  @DeleteDateColumn({ name: 'deleted_at', precision: 0, default: null })
  readonly deletedAt?: Date;
}
