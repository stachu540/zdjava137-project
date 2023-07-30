package pro.sdacademy.zdjava137.group3.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import pro.sdacademy.zdjava137.group3.model.Comment;

import java.util.Optional;

public interface Comments extends JpaRepository<Comments, Long> {

    Optional<Comment> findByProductIdAndId(Long productId, Long id);
}
