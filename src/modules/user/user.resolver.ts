import { Query, Resolver } from 'type-graphql';
import { User } from './user.dto';

@Resolver(() => User)
class UserResolver {
  @Query(() => User)
  user() {
    return {
      id: '123123',
      email: 'test@test.com',
      username: 'test',
    };
  }
}

export default UserResolver;
