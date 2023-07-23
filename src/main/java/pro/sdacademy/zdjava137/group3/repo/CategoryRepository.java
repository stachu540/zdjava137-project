package pro.sdacademy.zdjava137.group3.repo;

import lombok.Data;
import org.springframework.data.jpa.repository.JpaRepository;
import pro.sdacademy.zdjava137.group3.entity.Category;



public interface CategoryRepository extends JpaRepository<Category, Long> {

}
