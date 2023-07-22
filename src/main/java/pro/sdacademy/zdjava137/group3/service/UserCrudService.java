package pro.sdacademy.zdjava137.group3.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pro.sdacademy.zdjava137.group3.entity.User;
import pro.sdacademy.zdjava137.group3.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;


@Transactional
@Service
@RequiredArgsConstructor
public class UserCrudService {
    private  final UserRepository userRepository;

    public User findById(final long id) throws Exception {
        return userRepository.findById(id)
                .orElseThrow(() -> new Exception("Cannot find filedata with given id"));
    }

    public List<User> getAll() {
        return new ArrayList<>(userRepository.findAllBy());
    }

    public User create(final User user) {
        user.setId(null);
        return userRepository.save(user);
    }

    public  void update(final long id, final User user) throws Exception {
        User existingFileData = userRepository.findById(id).orElseThrow(() -> new Exception("Cannot update non existing file data"));
        existingFileData.setEmail(user.getEmail());
        existingFileData.setUsername(user.getUsername());
        existingFileData.setPassword(user.getPassword());
        existingFileData.setPermission(user.getPermission());
        existingFileData.setCreatedAt(user.getCreatedAt());
        existingFileData.setUpdatedAt(user.getUpdatedAt());
        existingFileData.setAddresses(user.getAddresses());
        userRepository.save(existingFileData);
    }

    public void delete(final long id) throws Exception {
        userRepository.findById(id).orElseThrow(() -> new Exception("Cannot delete non existing file data"));
        userRepository.deleteById(id);
    }
}
