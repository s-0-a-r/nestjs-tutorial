import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Schedule {
  @Field(() => Int)
  id: number;

  @Field(() => Date)
  start: Date;

  @Field(() => Date)
  end: Date;
}
