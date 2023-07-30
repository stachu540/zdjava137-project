package pro.sdacademy.zdjava137.group3.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import pro.sdacademy.zdjava137.group3.entity.User;

import java.util.Optional;

public interface Users extends JpaRepository<User, Long> {
    /**
     * Getting existing user by username
     *
     * @param username User Name
     * @return Existing user or empty optional
     */
    Optional<User> getUserByUsername(String username);
}
