import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Attendance {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  status: number;
}
