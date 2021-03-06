import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  username: string;

  @Field(() => ID, { nullable: false })
  email: string;

  @Field(() => ID, { nullable: false })
  password: string;
}
