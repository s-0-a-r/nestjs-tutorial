import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AttendancesService } from './attendances.service';
import { Attendance } from './object-types/attendance.object-type';
import { CreateAttendanceInput } from './dto/create-attendance.input';
import { UpdateAttendanceInput } from './dto/update-attendance.input';

@Resolver(() => Attendance)
export class AttendancesResolver {
  constructor(private readonly attendancesService: AttendancesService) {}

  @Mutation(() => Attendance)
  createAttendance(
    @Args('createAttendanceInput') createAttendanceInput: CreateAttendanceInput,
  ) {
    return this.attendancesService.create(createAttendanceInput);
  }

  @Query(() => [Attendance], { name: 'attendances' })
  findAll() {
    return this.attendancesService.findAll();
  }

  @Query(() => Attendance, { name: 'attendance' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attendancesService.findOne(id);
  }

  @Mutation(() => Attendance)
  updateAttendance(
    @Args('updateAttendanceInput') updateAttendanceInput: UpdateAttendanceInput,
  ) {
    return this.attendancesService.update(
      updateAttendanceInput.id,
      updateAttendanceInput,
    );
  }

  @Mutation(() => Attendance)
  removeAttendance(@Args('id', { type: () => Int }) id: number) {
    return this.attendancesService.remove(id);
  }
}
