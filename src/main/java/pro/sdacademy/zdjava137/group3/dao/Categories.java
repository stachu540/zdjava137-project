package pro.sdacademy.zdjava137.group3.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import pro.sdacademy.zdjava137.group3.entity.Category;

import java.util.List;


public interface Categories extends JpaRepository<Category, Long> {


    List<Category> findByParent_Id(long parentId);


}
