import { Schedule } from 'src/modules/schedules/entities/schedule.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { EntityBase } from 'src/shared/entities/base.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { AttendanceStatus } from '../attendances.constants';

@Entity({ name: 'attendances' })
export class Attendance extends EntityBase {
  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'schedule_id' })
  scheduleId: number;

  @Column()
  status: AttendanceStatus;

  @ManyToOne(() => User, (user) => user.attendances)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Schedule, (schedule) => schedule.attendances)
  @JoinColumn({ name: 'schedule_id' })
  schedule: Schedule;
}
