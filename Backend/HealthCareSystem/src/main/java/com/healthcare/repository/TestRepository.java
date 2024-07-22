package com.healthcare.repository;

import com.healthcare.dto.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface TestRepository  extends JpaRepository<Test, Integer> {

    //List<Test> findByDiagnosticCenterCenterId(int centerId);
}
