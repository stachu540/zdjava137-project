package pro.sdacademy.zdjava137.group3.repository;

import org.springframework.data.repository.CrudRepository;
import pro.sdacademy.zdjava137.group3.entity.User;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
    List<User> findAllBy();
}
