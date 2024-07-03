package com.healthcare.repository;

import com.healthcare.dto.DiagnosticCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiagnosticCenterRepository extends JpaRepository<DiagnosticCenter, String> {
}
