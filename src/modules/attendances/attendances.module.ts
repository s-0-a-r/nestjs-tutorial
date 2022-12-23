import { Module } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { AttendancesResolver } from './attendances.resolver';

@Module({
  providers: [AttendancesResolver, AttendancesService],
})
export class AttendancesModule {}
