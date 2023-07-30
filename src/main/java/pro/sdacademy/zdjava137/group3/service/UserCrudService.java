package pro.sdacademy.zdjava137.group3.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pro.sdacademy.zdjava137.group3.entity.User;
import pro.sdacademy.zdjava137.group3.exceptions.NotFoundException;
import pro.sdacademy.zdjava137.group3.model.Pagination;
import pro.sdacademy.zdjava137.group3.repository.UserRepository;


@Service
@Transactional
@RequiredArgsConstructor
public class UserCrudService {
    private final UserRepository userRepository;

    public User get(final long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Cannot find user with given id"));
    }

    public Pagination<User> getAll(PageRequest request) {
        Page<User> data = userRepository.findAll(request);
        return new Pagination<>(data.getContent(), data.getTotalElements());
    }

    public User create(final User user) {
        return userRepository.save(user);
    }

    public User update(final long id, final User user) {
        return userRepository.save(userRepository.findById(id)
                .map(user::append).orElseThrow(() -> new NotFoundException("Cannot update non existing file data")));
    }

    public void delete(final long id) {
        userRepository.findById(id).orElseThrow(() -> new RuntimeException("Cannot delete non existing file data"));
        userRepository.deleteById(id);
    }
}
