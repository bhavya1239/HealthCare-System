package com.healthcare.dto;



import jakarta.persistence.*;

import lombok.Data;

@Data

@Entity

public class Test {

    @Id

    @GeneratedValue//(strategy = GenerationType.AUTO)

    private Integer testId;
    private String testName;

    @ManyToOne(cascade = CascadeType.ALL)

    @JoinColumn(name = "center_id")

    private DiagnosticCenter diagnosticCenter;

}