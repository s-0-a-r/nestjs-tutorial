import { Attendance } from 'src/modules/attendances/entities/attendace.entity';
import { Event } from 'src/modules/events/entities/event.entity';
import { EntityBase } from 'src/shared/entities/base.entity';
import { Entity, Column, OneToOne, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class User extends EntityBase {
  @Column()
  name: string;

  @Column({ nullable: true, default: null })
  comment?: string;

  @OneToOne(() => Event, (event) => event.hostUser)
  hostEvent: Event;

  @OneToMany(() => Attendance, (attendance) => attendance.user)
  attendances: Attendance[];
}
