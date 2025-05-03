package edu.icet.dto;

import lombok.*;

//@Data kiyana annotation eka dammok getters,setters,constructors,toString okkoma wada.
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Student {
    private int id;
    private String name;
    private String address;
    private int age;
}
