import { Attendance } from 'src/modules/attendances/entities/attendace.entity';
import { Event } from 'src/modules/events/entities/event.entity';
import { DeletableEntity } from 'src/shared/entities/deletable.entity';
import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

@Entity({ name: 'schedules' })
export class Schedule extends DeletableEntity {
  @Column()
  start: Date;

  @Column()
  end: Date;

  @Column({ name: 'event_id' })
  eventId: number;

  @ManyToOne(() => Event, (event) => event.schedules)
  @JoinColumn({ name: 'event_id' })
  event: Event;

  @OneToMany(() => Attendance, (attendance) => attendance.schedule)
  attendances: Attendance[];
}
