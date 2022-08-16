package com.fms.hotel.security.repository;

import com.fms.hotel.security.repository.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    public Role findByRole(String role);

}
