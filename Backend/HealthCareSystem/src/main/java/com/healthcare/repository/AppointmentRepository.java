package com.healthcare.repository;

import com.healthcare.dto.Appointment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByDiagnosticCenterCenterId(String centerId);
}
