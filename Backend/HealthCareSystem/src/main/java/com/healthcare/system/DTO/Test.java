package com.healthcare.system.DTO;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Test {
    @Id
    private String testId;
    private String testName;
}
