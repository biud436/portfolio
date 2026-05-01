<template>
  <section id="contact" class="page-section">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Profile</h2>
        <h3 class="section-subheading text-muted"></h3>
      </div>
      <form id="contactForm" name="sentMessage">
        <div class="row align-items-stretch mb-5">
          <div class="col-md-6">
            <div class="form-group form-group-textarea mb-md-0">
              <img
                class="img-thumbnail rounded-circle img-fluid"
                width="50%"
                src="https://avatars1.githubusercontent.com/u/13586185?s=460&u=d695c01ba6ffbb01eb9230a7d7bb938b6d0c69e0&v=4"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-md-0">
              <p class="help-block text-light">
                <strong>Github : </strong>
                <a href="https://github.com/biud436/"
                  >https://github.com/biud436/</a
                >
              </p>
            </div>
            <div class="form-group mb-md-0">
              <p class="help-block text-light">
                <strong>Blog : </strong>
                <a href="https://blog.naver.com/biud436"
                  >https://blog.naver.com/biud436</a
                >
              </p>
            </div>
            <div class="form-group">
              <p class="help-block text-light">
                <strong>Email : </strong>
                <a href="mailto:biud436@gmail.com">biud436@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div class="text-center">
          <div id="success"></div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
