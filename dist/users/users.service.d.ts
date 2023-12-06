import { UsersEntity } from './entities/users.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UsersEntity>);
    findAll(): Promise<UsersEntity[]>;
    findById(id: number): Promise<UsersEntity>;
    create(user: UsersEntity): Promise<UsersEntity>;
    update(id: number, user: UsersEntity): Promise<UsersEntity>;
    delete(id: number): Promise<void>;
}
