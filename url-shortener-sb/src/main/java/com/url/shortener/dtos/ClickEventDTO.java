package com.url.shortener.dtos;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ClickEventDTO {

    private Long clickCount;
    private LocalDate createdDate;
}
