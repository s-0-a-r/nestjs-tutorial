import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Schedule {
  @Field(() => Int)
  id: number;

  @Field(() => Date)
  startAt: Date;

  @Field(() => Date)
  endAt: Date;
}
