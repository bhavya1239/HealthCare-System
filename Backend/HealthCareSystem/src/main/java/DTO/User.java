package DTO;

import lombok.Data;

import java.math.BigInteger;
import java.util.List;

@Data
public class User {
    private String userId;
    private List<DiagnosticCenter> centerList;
    private String userPassword;
    private String userName;
    private BigInteger contactNo;
    private String userRole;
    private String emailId;
}
