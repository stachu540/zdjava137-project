package pro.sdacademy.zdjava137.group3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pro.sdacademy.zdjava137.group3.entity.User;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
}
