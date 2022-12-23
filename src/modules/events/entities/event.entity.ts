import { Schedule } from 'src/modules/schedules/entities/schedule.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { DeletableEntity } from 'src/shared/entities/deletable.entity';
import { Entity, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';

@Entity({ name: 'events' })
export class Event extends DeletableEntity {
  @Column()
  name: string;

  @Column({ nullable: true, default: null })
  description?: string;

  @Column({ name: 'host_user_id' })
  hostUserId: number;

  @OneToOne(() => User, (user) => user.hostEvent)
  @JoinColumn({ name: 'host_user_id' })
  hostUser: User;

  @OneToMany(() => Schedule, (schedule) => schedule.event)
  schedules: Schedule[];
}
