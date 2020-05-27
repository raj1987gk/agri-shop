package com.agriculture.controller;

import org.springframework.web.bind.annotation.RequestMapping;

public class MainController {
	  @RequestMapping(value={"/"})
		public String index() {
			return "index.html";
		}

	}