package pro.sdacademy.zdjava137.group3.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import pro.sdacademy.zdjava137.group3.entity.Category;
import pro.sdacademy.zdjava137.group3.entity.Product;
import pro.sdacademy.zdjava137.group3.exceptions.NotFoundException;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByCategory(Category category);

    Optional<Product> findById(Long productId);

    Product save(Product product);

    void deleteById(Long productId) throws NotFoundException;

    List<Product> findByCategory_Id(long categoryId);


}
