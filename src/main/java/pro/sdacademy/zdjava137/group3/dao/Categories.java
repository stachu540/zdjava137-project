package pro.sdacademy.zdjava137.group3.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import pro.sdacademy.zdjava137.group3.entity.Category;

public interface Categories extends JpaRepository<Category, Long> {
}
