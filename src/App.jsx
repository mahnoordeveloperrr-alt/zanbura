import React, { useState, useEffect } from 'react';

// ========== IMAGE IMPORTS ==========
import honeyMainImg from './img/11.png';   // main honey jar, product images, categories, about, why machine
import heroJarImg from './img/3.png';      // hero section ka jar
import bee1Img from './img/4.png';         // bee 1 (top left)
import bee2Img from './img/1.png';         // bee 2 (bottom right)
import giftBoxImg from './img/bar.png';    // gift box image

// ==================== STYLES (same as before) ====================
const styles = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #FCF3E4;
    font-family: 'Noto Nastaliq Urdu', serif;
    color: #2C221B;
    overflow-x: hidden;
    line-height: 1.5;
    position: relative;
}

html {
    scroll-behavior: smooth;
}

:root {
    --primary: #EE9223;
    --primary-dark: #D47A12;
    --bg-soft: #FAE0BF;
    --bg-light: #FCF3E4;
    --text-dark: #2C221B;
    --white: #ffffff;
    --shadow-sm: 0 12px 28px rgba(0,0,0,0.06);
    --shadow-md: 0 20px 35px -12px rgba(0,0,0,0.12);
}

body::before {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23EE9223" stroke-width="0.5" stroke-opacity="0.08"><path d="M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17 M2 12L12 17L22 12"/></svg>');
    background-repeat: repeat;
    background-size: 40px;
    pointer-events: none;
    z-index: 0;
    opacity: 0.5;
}

.blur-circle {
    position: absolute;
    background: radial-gradient(circle, rgba(238,146,35,0.12) 0%, rgba(238,146,35,0) 70%);
    border-radius: 50%;
    filter: blur(55px);
    z-index: 0;
    pointer-events: none;
}

header {
    position: absolute;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    z-index: 1000;
    top: 0;
}

.navbar {
    width: 100%;
    padding: 20px 0 12px;
    border-bottom: 1px solid rgba(238, 146, 35, 0.3);
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 3;
}

.nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.logo {
    font-size: 1.9rem;
    font-weight: 800;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo i {
    font-size: 2rem;
}

.nav-links {
    display: flex;
    gap: 28px;
    list-style: none;
}

.nav-links a {
    text-decoration: none;
    font-weight: 600;
    color: var(--text-dark);
    transition: 0.2s;
    font-size: 1.05rem;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
}

.nav-links a i {
    font-size: 0.95rem;
    color: var(--primary);
}

.nav-links a:hover {
    color: var(--primary);
}

.icons {
    display: flex;
    gap: 20px;
    font-size: 1.3rem;
    cursor: pointer;
}

.icons i {
    transition: 0.2s;
    color: #5A3E28;
}

.icons i:hover {
    color: var(--primary);
    transform: scale(1.1);
}

.hamburger {
    display: none;
    font-size: 1.6rem;
    cursor: pointer;
    color: #5A3E28;
    background: none;
    border: none;
    z-index: 1100;
}

.hamburger:hover {
    color: var(--primary);
}

.herosection {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    position: relative;
    overflow: hidden;
}

.hero {
    height: 100vh;
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.hero .img {
    width: 100%;
    height: 100%;
    object-fit: contain;  /* ya cover, jo aapko pasand ho */
    object-position: center;
}

.h1 {
    position: absolute;
    font-size: 3.3rem;
    color: #532d0c;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 5;
    pointer-events: none;
    width: 700px;
}

.bee1, .bee2 {
    position: absolute;
    width: 100px;
    height: 100px;
    animation: floatBee 4s infinite ease-in-out;
    z-index: 6;
}
.bee1 img, .bee2 img {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 8px 12px rgba(0,0,0,0.1));
}
.bee1 { top: 35%; left: 5%; animation-delay: 0s; }
.bee2 { bottom: 20%; right: 8%; animation-delay: 1.2s; animation-duration: 4.6s; }

@keyframes floatBee {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-18px) rotate(5deg); }
    100% { transform: translateY(0px) rotate(0deg); }
}

.btn {
    background: linear-gradient(135deg, var(--primary), #f5a83b);
    box-shadow: 0 8px 18px rgba(238,146,35,0.3);
    display: inline-block;
    text-decoration: none;
    padding: 12px 28px;
    border-radius: 40px;
    color: white;
    font-weight: 600;
    transition: 0.3s;
    cursor: pointer;
    border: none;
}
.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 25px rgba(238,146,35,0.4);
    background: linear-gradient(135deg, var(--primary-dark), var(--primary));
}

.banner {
    width: 100%;
    padding: 60px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    background: rgba(255, 248, 235, 0.7);
    border-radius: 48px;
    margin: 30px auto;
    backdrop-filter: blur(2px);
    box-shadow: var(--shadow-sm);
}
.content { width: 50%; text-align: right; }
.small-title { color: var(--primary); font-size: 22px; margin-bottom: 10px; font-weight: bold; }
.main-title { font-size: 42px; line-height: 1.8; margin-bottom: 20px; }
.description { color: #666; line-height: 2; margin-bottom: 25px; font-size: 17px; }
.image-box { width: 40%; position: relative; display: flex; justify-content: center; align-items: center; }
.image-bg { width: 100%; max-width: 300px; aspect-ratio: 1/1; background: #efd9c2; border-radius: 35px; position: absolute; z-index: 1; }
.image-box img { width: 90%; max-width: 270px; position: relative; z-index: 2; object-fit: contain; }

.products-section { padding: 80px 0; }
.products-wrapper {
    background: #f8e5ce;
    border-radius: 40px;
    padding: 35px;
    box-shadow: var(--shadow-md);
    display: flex;
    gap: 22px;
    direction: ltr;
}
.product-side {
    width: 260px;
    background: var(--primary);
    border-radius: 28px;
    padding: 28px 22px;
    color: white;
    direction: rtl;
    order: 2;
}
.product-side h2 { font-size: 28px; line-height: 1.8; }
.filter-box { background: white; border-radius: 18px; padding: 10px; margin-top: 20px; }
.filter-box select { width: 100%; border: none; background: transparent; font-family: inherit; font-size: 1rem; padding: 5px; cursor: pointer; }
.side-icons { display: flex; gap: 12px; margin-top: 25px; justify-content: center; }
.side-icons button { width: 42px; height: 42px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.5); background: transparent; color: white; cursor: pointer; font-size: 1.2rem; transition: 0.2s; }
.side-icons button:hover { background: rgba(255,255,255,0.2); transform: scale(1.05); }
.products-carousel-container { flex: 1; overflow: hidden; position: relative; order: 1; }
.products-grid { display: flex; gap: 20px; transition: transform 0.4s ease-in-out; direction: rtl; flex-wrap: wrap; }
.product-card {
    background: white;
    border-radius: 32px;
    padding: 20px;
    position: relative;
    transition: 0.3s;
    border: 1px solid rgba(238,146,35,0.2);
    box-shadow: 0 15px 30px rgba(0,0,0,0.05);
    min-width: calc(33.333% - 14px);
    flex: 0 0 calc(33.333% - 14px);
}
.product-card:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 30px 40px rgba(0,0,0,0.12); border-color: var(--primary); }
.badge { position: absolute; top: 15px; left: 15px; background: #f8d37f; color: #7c4a00; font-size: 12px; padding: 4px 10px; border-radius: 20px; }
.product-image { text-align: center; margin-bottom: 15px; }
.product-image img { width: 120px; height: 150px; object-fit: contain; }
.product-title { margin-bottom: 10px; font-size: 18px; font-weight: 700; }
.product-bottom { display: flex; justify-content: space-between; align-items: center; }
.price { color: var(--primary); font-weight: bold; font-size: 1.1rem; }
.cart-btn { width: 38px; height: 38px; border: none; border-radius: 50%; background: #fff0e0; cursor: pointer; color: var(--primary); font-size: 1.2rem; transition: 0.2s; }
.cart-btn:hover { background: var(--primary); color: white; transform: scale(1.1); }

.offer-section { padding: 40px 0 80px; }
.offer-wrapper { display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; }
.offer-card { border-radius: 25px; padding: 25px 30px; display: flex; align-items: center; justify-content: space-between; min-height: 190px; flex-direction: row-reverse; }
.light-card { background: linear-gradient(135deg, #f5c36b, #f7e0b3); }
.dark-card { background: linear-gradient(135deg, #5c3b17, #2b1b0d); color: white; }
.offer-content { width: 55%; text-align: right; }
.offer-content h2 { font-size: 30px; line-height: 1.8; margin-bottom: 10px; }
.offer-content p { font-size: 16px; margin-bottom: 20px; opacity: 0.9; }
.offer-btn { display: inline-block; padding: 10px 24px; background: white; color: #5c3b17; text-decoration: none; border-radius: 30px; font-weight: bold; transition: 0.3s; cursor: pointer; }
.offer-btn:hover { transform: translateY(-2px); }
.dark-btn { background: #EE9223; color: white; }
.offer-image { width: 40%; display: flex; justify-content: center; align-items: center; }
.offer-image img { width: 180px; object-fit: contain; }

.modern-category { padding: 70px 0; }
.modern-category-box { background: #fff8ef; border-radius: 35px; padding: 35px 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.04); }
.modern-category-header { text-align: center; margin-bottom: 35px; }
.modern-category-header h2 { font-size: 34px; margin-bottom: 10px; }
.modern-category-header p { color: #777; }
.modern-slider-wrapper { display: flex; align-items: center; gap: 20px; }
.modern-slider { display: flex; gap: 28px; overflow-x: auto; scroll-behavior: smooth; flex: 1; scrollbar-width: none; padding: 5px 0; }
.modern-slider::-webkit-scrollbar { display: none; }
.modern-card { min-width: 150px; text-align: center; transition: 0.3s; cursor: pointer; }
.modern-card:hover { transform: translateY(-8px); }
.modern-circle { width: 120px; height: 120px; background: linear-gradient(145deg, #fef3e0, #fce4c2); border-radius: 50%; margin: auto; display: flex; align-items: center; justify-content: center; border: 3px solid var(--primary); }
.modern-circle img { width: 70px; height: auto; }
.modern-card h4 { margin-top: 15px; }
.modern-arrow { width: 48px; height: 48px; border-radius: 50%; border: none; background: var(--primary); color: white; cursor: pointer; flex-shrink: 0; display: flex; align-items: center; justify-content: center; transition: 0.3s; }
.modern-arrow:hover { background: var(--primary-dark); transform: scale(1.05); }

.why-section { padding: 80px 0; }
.why-title { text-align: center; margin-bottom: 40px; }
.why-title h2 { font-size: 38px; }
.why-title span { color: var(--primary); }
.why-wrapper { display: flex; justify-content: space-between; align-items: center; gap: 40px; }
.why-features { width: 30%; display: flex; flex-direction: column; gap: 18px; }
.why-card { background: white; border-radius: 18px; padding: 18px; display: flex; align-items: center; gap: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.05); transition: 0.3s; }
.why-card:hover { transform: translateY(-5px); }
.why-icon { width: 50px; height: 50px; border-radius: 15px; background: #fff3e6; display: flex; align-items: center; justify-content: center; color: var(--primary); font-size: 20px; }
.why-center { width: 40%; text-align: center; }
.why-machine { background: #fce4c2; border-radius: 30px; padding: 30px; }
.why-machine img { width: 100%; max-width: 280px; }

.testimonials-section { padding: 70px 0; }
.testimonial-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 45px; }
.testi-card { background: white; border-radius: 32px; padding: 28px 22px; text-align: center; box-shadow: var(--shadow-md); transition: 0.3s; border-bottom: 4px solid var(--primary); }
.testi-card:hover { transform: translateY(-8px); }
.testi-stars { color: #FFB800; margin-bottom: 15px; font-size: 1.1rem; }
.testi-text { font-size: 1rem; line-height: 1.8; margin: 15px 0; color: #4a3a2a; }
.testi-name { font-weight: 800; color: var(--primary-dark); margin-top: 12px; }

.faq-section { padding: 70px 0; }
.faq-title { text-align: center; margin-bottom: 45px; }
.faq-title h2 { font-size: 36px; }
.faq-title span { color: var(--primary); }
.faq-container { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 15px; }
.faq-item { background: white; border-radius: 20px; padding: 18px 25px; box-shadow: 0 6px 18px rgba(0,0,0,0.04); border-right: 4px solid var(--primary); }
.faq-question { display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-size: 1.2rem; font-weight: 600; }
.faq-question i { color: var(--primary); transition: transform 0.3s; }
.faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, margin-top 0.3s; color: #5a4a3a; line-height: 1.9; }
.faq-item.active .faq-answer { max-height: 200px; margin-top: 15px; }
.faq-item.active .faq-question i { transform: rotate(180deg); }

.footer { background: #2C221B; background-image: radial-gradient(circle at 10% 20%, rgba(238,146,35,0.08) 2%, transparent 2.5%); background-size: 28px 28px; border-top: 3px solid var(--primary); color: #f0d9b5; padding: 60px 0 25px; margin-top: 30px; }
.footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 35px; margin-bottom: 40px; }
.footer-col h4 { color: #FFC285; font-size: 1.4rem; margin-bottom: 18px; display: flex; align-items: center; gap: 8px; }
.footer-col p, .footer-col li { font-size: 0.95rem; opacity: 0.85; line-height: 2; list-style: none; }
.footer-col a { color: #f0d9b5; text-decoration: none; transition: 0.2s; cursor: pointer; }
.footer-col a:hover { color: var(--primary); padding-right: 6px; }
.social-icons { display: flex; gap: 15px; margin-top: 10px; }
.social-icons a { width: 36px; height: 36px; background: rgba(255,195,120,0.12); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #f0d9b5; transition: 0.25s; }
.social-icons a:hover { background: var(--primary); transform: translateY(-5px) rotate(6deg); color: white; }
.footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 25px; text-align: center; font-size: 0.9rem; opacity: 0.7; }

.reveal { opacity: 0; transform: translateY(35px); transition: all 0.8s cubic-bezier(0.2, 0.9, 0.3, 1.1); }
.reveal.active { opacity: 1; transform: translateY(0); }

.whatsapp-float { position: fixed; bottom: 28px; left: 28px; background: #25D366; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); z-index: 1100; transition: 0.3s; text-decoration: none; animation: pulseWA 1.8s infinite; }
.whatsapp-float:hover { transform: scale(1.1); background: #20b859; }
@keyframes pulseWA { 0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); } 70% { box-shadow: 0 0 0 14px rgba(37,211,102,0); } 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); } }

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(6px);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease;
}
.modal-overlay.active {
    visibility: visible;
    opacity: 1;
}
.modal-container {
    background: #fffef7;
    border-radius: 36px;
    width: 90%;
    max-width: 480px;
    padding: 32px 28px;
    position: relative;
    box-shadow: 0 30px 50px rgba(0,0,0,0.25);
    transform: scale(0.95);
    transition: transform 0.3s ease;
    text-align: center;
    font-family: 'Noto Nastaliq Urdu', serif;
    max-height: 85vh;
    overflow-y: auto;
    border: 1px solid rgba(238,146,35,0.2);
}
.modal-overlay.active .modal-container {
    transform: scale(1);
}
.modal-close {
    position: absolute;
    top: 18px;
    left: 22px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #8B7355;
    transition: 0.2s;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal-close:hover {
    color: var(--primary);
    background: rgba(238,146,35,0.1);
}
.modal-tabs {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 30px;
    border-bottom: 2px solid #f0e0cc;
    padding-bottom: 12px;
}
.tab-btn {
    background: none;
    border: none;
    font-size: 1.3rem;
    font-weight: 700;
    font-family: inherit;
    color: #5a4a3a;
    cursor: pointer;
    padding: 6px 24px;
    border-radius: 60px;
    transition: 0.2s;
}
.tab-btn.active {
    background: var(--primary);
    color: white;
    box-shadow: 0 6px 14px rgba(238,146,35,0.3);
}
.form-group {
    margin-bottom: 22px;
    text-align: right;
}
.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 700;
    color: #3a2a1a;
    font-size: 0.95rem;
}
.form-group input {
    width: 100%;
    padding: 12px 18px;
    border: 1px solid #e2d4c2;
    border-radius: 60px;
    background: white;
    font-family: inherit;
    font-size: 1rem;
    transition: 0.2s;
    outline: none;
}
.form-group input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(238,146,35,0.15);
}
.modal-btn {
    background: linear-gradient(135deg, var(--primary), #f5a83b);
    border: none;
    width: 100%;
    padding: 12px;
    border-radius: 60px;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    font-family: inherit;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 8px;
}
.modal-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(238,146,35,0.4);
}
.form-switch {
    margin-top: 20px;
    font-size: 0.9rem;
    color: #6b5a48;
}
.form-switch span {
    color: var(--primary);
    cursor: pointer;
    font-weight: 700;
}
.hidden-form {
    display: none;
}
.cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fef7e8;
    border-radius: 28px;
    padding: 14px 18px;
    margin-bottom: 14px;
    gap: 12px;
}
.cart-total {
    margin-top: 24px;
    padding-top: 18px;
    border-top: 2px solid #f0e0cc;
    font-size: 1.4rem;
    font-weight: 800;
    display: flex;
    justify-content: space-between;
}
.clear-cart-btn {
    background: #d9c4a8;
    border: none;
    padding: 10px 24px;
    border-radius: 60px;
    margin-top: 20px;
    cursor: pointer;
    font-family: inherit;
    font-weight: 700;
}
.empty-cart-msg {
    text-align: center;
    padding: 32px 20px;
    color: #9b8a72;
}

@media(max-width:950px) {
    .hamburger { display: block; }
    .nav-links { display: none; position: absolute; top: 100%; right: 0; width: 260px; background: #fffdf7; flex-direction: column; gap: 0; border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.12); padding: 12px 0; z-index: 1050; border: 1px solid rgba(238,146,35,0.25); }
    .nav-links.active { display: flex; }
    .nav-links li { width: 100%; }
    .nav-links a { padding: 14px 22px; border-bottom: 1px solid rgba(238,146,35,0.1); font-size: 1rem; }
    .products-wrapper { flex-direction: column; }
    .product-side { width: 100%; order: 1; }
    .products-carousel-container { order: 2; }
    .product-card { min-width: calc(50% - 10px); flex: 0 0 calc(50% - 10px); }
    .bee1, .bee2 { width: 70px; height: 70px; }
    .h1 { font-size: 2.5rem; }
    .banner { flex-direction: column; padding: 40px 25px; }
    .content, .image-box { width: 100%; }
    .content { text-align: center; margin-bottom: 30px; }
    .main-title { font-size: 30px; }
    .offer-wrapper { grid-template-columns: 1fr; }
    .offer-card { flex-direction: column-reverse; text-align: center; }
    .testimonial-grid { grid-template-columns: 1fr; }
    .why-wrapper { flex-direction: column; }
    .why-features, .why-center { width: 100%; }
    .footer-grid { grid-template-columns: repeat(2, 1fr); }
}
@media(max-width:600px) {
    .product-card { min-width: 100%; flex: 0 0 100%; }
    .h1 { font-size: 1.8rem; width: 90%; }
    .modern-card { min-width: 120px; }
    .whatsapp-float { width: 50px; height: 50px; font-size: 28px; }
    .footer-grid { grid-template-columns: 1fr; text-align: center; }
}
`;

// ==================== DATA (UPDATED WITH IMPORTED IMAGES) ====================
const allProducts = [
    { id: 1, name: "سدر خالص شہد", price: 1200, category: "sidr", badge: "خالص", img: honeyMainImg },
    { id: 2, name: "جنگلی پھول شہد", price: 1450, category: "wild", badge: "قدرتی", img: honeyMainImg },
    { id: 3, name: "آرگینک شہد", price: 1800, category: "organic", badge: "پریمیم", img: honeyMainImg },
    { id: 4, name: "سدر پریمیم", price: 2200, category: "sidr", badge: "خالص", img: honeyMainImg },
    { id: 5, name: "شمالی جنگلی", price: 1650, category: "wild", badge: "قدرتی", img: honeyMainImg },
    { id: 6, name: "آرگینک گولڈ", price: 2100, category: "organic", badge: "پریمیم", img: honeyMainImg }
];

const categories = [
    { name: "سدر شہد", img: honeyMainImg },
    { name: "کشمیری شہد", img: honeyMainImg },
    { name: "جنگلی پھول", img: honeyMainImg },
    { name: "آرگینک شہد", img: honeyMainImg },
    { name: "پریمیم شہد", img: honeyMainImg },
    { name: "لائیچی شہد", img: honeyMainImg },
    { name: "نیم کے پھول", img: honeyMainImg },
    { name: "شاہی شہد", img: honeyMainImg }
];

// ==================== MAIN APP ====================
function App() {
    const [cart, setCart] = useState([]);
    const [nextId, setNextId] = useState(1);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [filter, setFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(0);
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeAuthTab, setActiveAuthTab] = useState('login');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [regName, setRegName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const itemsPerPage = 3;

    // Load cart from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('zanburaCart');
        if (savedCart) {
            const parsed = JSON.parse(savedCart);
            setCart(parsed);
            if (parsed.length) {
                const maxId = Math.max(...parsed.map(i => i.id), 0);
                setNextId(maxId + 1);
            }
        }
    }, []);

    // Save cart to localStorage
    useEffect(() => {
        localStorage.setItem('zanburaCart', JSON.stringify(cart));
    }, [cart]);

    // Scroll reveal observer
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        reveals.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Inject styles
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
        return () => styleSheet.remove();
    }, []);

    const filteredProducts = filter === 'all' ? allProducts : allProducts.filter(p => p.category === filter);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const displayedProducts = filteredProducts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    useEffect(() => {
        setCurrentPage(0);
    }, [filter]);

    const addToCart = (product) => {
        const existing = cart.find(item => item.name === product.name);
        if (existing) {
            setCart(cart.map(item => 
                item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { 
                id: nextId, 
                name: product.name, 
                price: product.price, 
                quantity: 1, 
                img: product.img 
            }]);
            setNextId(nextId + 1);
        }
        const msg = document.createElement('div');
        msg.textContent = `${product.name} کارٹ میں شامل!`;
        msg.style.cssText = 'position:fixed; bottom:90px; left:20px; background:#EE9223; color:white; padding:8px 18px; border-radius:40px; z-index:3000;';
        document.body.appendChild(msg);
        setTimeout(() => msg.remove(), 1500);
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            setCart(cart.filter(item => item.id !== id));
        } else {
            setCart(cart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const handleLogin = () => {
        if (!loginEmail || !loginPassword) alert('براہ کرم ای میل اور پاس ورڈ درج کریں');
        else { alert('داخلہ کامیاب! خوش آمدید'); setIsAuthOpen(false); }
    };

    const handleRegister = () => {
        if (!regName || !regEmail || !regPassword) alert('براہ کرم تمام فیلڈز بھریں');
        else if (regPassword.length < 6) alert('پاس ورڈ کم از کم 6 حروف کا ہونا چاہیے');
        else { alert('اندراج کامیاب! اب آپ داخل ہو سکتے ہیں'); setActiveAuthTab('login'); setIsAuthOpen(false); }
    };

    const handleSearch = () => {
        if (searchTerm.trim()) alert(`"${searchTerm}" کی تلاش کے نتائج جلد آئیں گے۔`);
        else alert('براہ کرم تلاش کے لیے لفظ درج کریں');
        setIsSearchOpen(false);
        setSearchTerm('');
    };

    const smoothScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMenuOpen(false);
    };

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <>
            <div className="blur-circle" style={{ width: '400px', height: '400px', top: '20%', left: '-100px' }}></div>
            <div className="blur-circle" style={{ width: '550px', height: '550px', bottom: '5%', right: '-150px' }}></div>

            {/* Header */}
            <header>
                <nav className="navbar">
                    <div className="container nav-wrapper">
                        <div className="logo"><i className="fas fa-honey-pot"></i> زنبورا</div>
                        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                            <li><a href="#home" onClick={(e) => smoothScroll(e, '#home')}><i className="fas fa-home"></i> صفحہ اول</a></li>
                            <li><a href="#products" onClick={(e) => smoothScroll(e, '#products')}><i className="fas fa-oil-can"></i> مصنوعات</a></li>
                            <li><a href="#about" onClick={(e) => smoothScroll(e, '#about')}><i className="fas fa-leaf"></i> تعارف</a></li>
                            <li><a href="#testimonials" onClick={(e) => smoothScroll(e, '#testimonials')}><i className="fas fa-star"></i> تبصرے</a></li>
                            <li><a href="#faq" onClick={(e) => smoothScroll(e, '#faq')}><i className="fas fa-question-circle"></i> سوالات</a></li>
                            <li><a href="#contact" onClick={(e) => smoothScroll(e, '#contact')}><i className="fas fa-phone-alt"></i> رابطہ</a></li>
                        </ul>
                        <div className="icons">
                            <i className="fas fa-search" onClick={() => setIsSearchOpen(true)}></i>
                            <i className="fas fa-shopping-cart" onClick={() => setIsCartOpen(true)}></i>
                            <i className="fas fa-user-circle" onClick={() => setIsAuthOpen(true)}></i>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <div className="herosection" id="home">
                <div className="bee1"><img src={bee1Img} alt="bee" /></div>
                <div className="hero">
                    <img className="img" src={heroJarImg} alt="honey" />
                    <h1 className="h1">قدرت کا سنہری تحفہ<br />خالص شہد زنبورا</h1>
                </div>
                <div className="bee2"><img src={bee2Img} alt="bee" /></div>
            </div>

            {/* About Section */}
            <section className="container banner reveal" id="about">
                <div className="content">
                    <div className="small-title">قدرتی اور خالص</div>
                    <h1 className="main-title">خالص شہد کی مٹھاس <br /> قدرت کے ساتھ</h1>
                    <p className="description">بہترین معیار کے خالص شہد سے لطف اٹھائیں۔ قدرتی ذائقہ، صحت بخش فوائد اور خوشبو سے بھرپور۔</p>
                    <div>
                        <a href="#products" className="btn" onClick={(e) => smoothScroll(e, '#products')}>ابھی خریدیں</a>
                        <a href="#testimonials" className="btn" style={{ marginRight: '12px', background: 'transparent', border: '2px solid var(--primary)', color: 'var(--primary-dark)' }} onClick={(e) => smoothScroll(e, '#testimonials')}>مزید جانیں</a>
                    </div>
                </div>
                <div className="image-box"><div className="image-bg"></div><img src={honeyMainImg} alt="شہد" /></div>
            </section>

            {/* Products Section */}
            <section className="products-section" id="products">
                <div className="container">
                    <div className="products-wrapper reveal">
                        <div className="product-side">
                            <h2>مصنوعات <br />تخفیف دار</h2>
                            <div className="filter-box">
                                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                                    <option value="all">تمام مصنوعات</option>
                                    <option value="sidr">سدر شہد</option>
                                    <option value="wild">جنگلی پھول</option>
                                    <option value="organic">آرگینک شہد</option>
                                </select>
                            </div>
                            <div className="side-icons">
                                <button onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}><i className="fas fa-arrow-right"></i></button>
                                <button onClick={() => (currentPage + 1) * itemsPerPage < filteredProducts.length && setCurrentPage(currentPage + 1)}><i className="fas fa-arrow-left"></i></button>
                            </div>
                        </div>
                        <div className="products-carousel-container">
                            <div className="products-grid">
                                {displayedProducts.map(product => (
                                    <div className="product-card" key={product.id}>
                                        <span className="badge">{product.badge}</span>
                                        <div className="product-image"><img src={product.img} alt={product.name} /></div>
                                        <h3 className="product-title">{product.name}</h3>
                                        <div className="product-bottom">
                                            <span className="price">Rs {product.price}</span>
                                            <button className="cart-btn" onClick={() => addToCart(product)}><i className="fas fa-shopping-bag"></i></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offer Section */}
            <section className="offer-section">
                <div className="container">
                    <div className="offer-wrapper reveal">
                        <div className="offer-card light-card">
                            <div className="offer-content"><h2>خالص شہد گفٹ باکس</h2><p>قدرتی شہد کے خصوصی تحائف</p><a href="#products" className="offer-btn" onClick={(e) => smoothScroll(e, '#products')}>ابھی خریدیں</a></div>
                            <div className="offer-image"><img src={giftBoxImg} alt="gift" /></div>
                        </div>
                        <div className="offer-card dark-card">
                            <div className="offer-content"><h2>زنبورا پریمیم شہد</h2><p>خالص اور قدرتی ذائقہ</p><a href="#products" className="offer-btn dark-btn" onClick={(e) => smoothScroll(e, '#products')}>مزید دیکھیں</a></div>
                            <div className="offer-image"><img src={honeyMainImg} alt="premium" /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Slider */}
            <section className="modern-category">
                <div className="container">
                    <div className="modern-category-box reveal">
                        <div className="modern-category-header"><h2>مصنوعات کی اقسام</h2><p>زنبورا کے خالص اور قدرتی شہد کی مختلف اقسام</p></div>
                        <div className="modern-slider-wrapper">
                            <button className="modern-arrow" onClick={() => document.querySelector('.modern-slider')?.scrollBy({ left: -170, behavior: 'smooth' })}><i className="fas fa-chevron-right"></i></button>
                            <div className="modern-slider">
                                {categories.map((cat, idx) => (
                                    <div className="modern-card" key={idx}>
                                        <div className="modern-circle"><img src={cat.img} alt={cat.name} /></div>
                                        <h4>{cat.name}</h4>
                                    </div>
                                ))}
                            </div>
                            <button className="modern-arrow" onClick={() => document.querySelector('.modern-slider')?.scrollBy({ left: 170, behavior: 'smooth' })}><i className="fas fa-chevron-left"></i></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Section */}
            <section className="why-section" id="contact">
                <div className="container">
                    <div className="why-title reveal"><h2>کیوں <span>زنبورا</span> کو منتخب کریں؟</h2></div>
                    <div className="why-wrapper reveal">
                        <div className="why-features">
                            <div className="why-card"><div className="why-icon"><i className="fas fa-leaf"></i></div><h4>خالص اور قدرتی شہد</h4></div>
                            <div className="why-card"><div className="why-icon"><i className="fas fa-award"></i></div><h4>بہترین معیار کی ضمانت</h4></div>
                            <div className="why-card"><div className="why-icon"><i className="fas fa-truck"></i></div><h4>تیز اور محفوظ ڈیلیوری</h4></div>
                        </div>
                        <div className="why-center"><div className="why-machine"><img src={honeyMainImg} alt="honey" /></div></div>
                        <div className="why-features">
                            <div className="why-card"><div className="why-icon"><i className="fas fa-heart"></i></div><h4>صحت بخش اور غذائیت سے بھرپور</h4></div>
                            <div className="why-card"><div className="why-icon"><i className="fas fa-shield-alt"></i></div><h4>مکمل صفائی اور حفاظت</h4></div>
                            <div className="why-card"><div className="why-icon"><i className="fas fa-star"></i></div><h4>ہزاروں خوش صارفین کا اعتماد</h4></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-section" id="testimonials">
                <div className="container">
                    <div className="faq-title reveal"><h2>صارفین کے <span>تاثرات</span></h2></div>
                    <div className="testimonial-grid">
                        <div className="testi-card reveal"><div className="testi-stars">★★★★★</div><p className="testi-text">"زنبورا کا شہد حقیقت میں خالص اور لاجواب ہے۔ روزانہ استعمال سے مجھے توانائی محسوس ہوتی ہے۔"</p><h4 className="testi-name">- عائشہ خان</h4></div>
                        <div className="testi-card reveal"><div className="testi-stars">★★★★★</div><p className="testi-text">"بہترین پیکنگ اور ذائقہ۔ میں نے سدر شہد آزمایا، واقعی معیاری ہے۔ شکریہ زنبورا۔"</p><h4 className="testi-name">- احمد رضا</h4></div>
                        <div className="testi-card reveal"><div className="testi-stars">★★★★☆</div><p className="testi-text">"قدرتی مٹھاس اور خوشبو، گفٹ باکس بہت خوبصورت ہے۔ ضرور خریدیں گے۔"</p><h4 className="testi-name">- سعدیہ ملک</h4></div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }}><a href="#products" className="btn" onClick={(e) => smoothScroll(e, '#products')}>مزید شہد خریدیں <i className="fas fa-arrow-left"></i></a></div>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq-section" id="faq">
                <div className="container">
                    <div className="faq-title reveal"><h2>اکثر <span>پوچھے گئے</span> سوالات</h2></div>
                    <div className="faq-container">
                        {[
                            { q: "کیا زنبورا شہد واقعی خالص ہے؟", a: "جی ہاں، زنبورا شہد 100% خالص اور قدرتی ہے، بغیر کسی ملاوٹ کے۔" },
                            { q: "شہد کی ڈیلیوری میں کتنا وقت لگتا ہے؟", a: "پورے پاکستان میں 2 سے 4 کاروباری دنوں میں آپ کا آرڈر پہنچ جاتا ہے۔" },
                            { q: "کون سی اقسام دستیاب ہیں؟", a: "سدر شہد، جنگلی پھول، آرگینک اور پریمیم گفٹ باکس موجود ہیں۔" },
                            { q: "کیا میں بڑی تعداد میں آرڈر کر سکتا ہوں؟", a: "ہول سیل آرڈرز کے لیے رابطہ کریں۔ ہم خصوصی تخفیف دیتے ہیں۔" }
                        ].map((faq, idx) => (
                            <div key={idx} className={`faq-item ${activeFaq === idx ? 'active' : ''}`}>
                                <div className="faq-question" onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                                    <span>{faq.q}</span><i className="fas fa-chevron-down"></i>
                                </div>
                                <div className="faq-answer"><p>{faq.a}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col"><h4><i className="fas fa-droplet"></i> زنبورا</h4><p>قدرت کا سنہری تحفہ، خالص شہد۔ بہترین معیار اور قدرتی ذائقہ۔</p><div className="social-icons"><a href="#"><i className="fab fa-facebook-f"></i></a><a href="#"><i className="fab fa-instagram"></i></a><a href="#"><i className="fab fa-whatsapp"></i></a><a href="#"><i className="fab fa-twitter"></i></a></div></div>
                        <div className="footer-col"><h4>فوری لنکس</h4><ul><li><a href="#home" onClick={(e) => smoothScroll(e, '#home')}>صفحہ اول</a></li><li><a href="#products" onClick={(e) => smoothScroll(e, '#products')}>مصنوعات</a></li><li><a href="#about" onClick={(e) => smoothScroll(e, '#about')}>تعارف</a></li><li><a href="#testimonials" onClick={(e) => smoothScroll(e, '#testimonials')}>تبصرے</a></li><li><a href="#faq" onClick={(e) => smoothScroll(e, '#faq')}>سوالات</a></li></ul></div>
                        <div className="footer-col"><h4>رابطہ</h4><ul><li><i className="fas fa-map-marker-alt"></i> لاہور، پاکستان</li><li><i className="fas fa-phone"></i> +92 300 1234567</li><li><i className="fas fa-envelope"></i> info@zanbura.pk</li></ul></div>
                        <div className="footer-col"><h4>اوقات کار</h4><ul><li>پیر - جمعہ: 9:00 - 18:00</li><li>ہفتہ: 10:00 - 16:00</li><li>اتوار: بند</li></ul></div>
                    </div>
                    <div className="footer-bottom"><p><i className="far fa-copyright"></i> 2026 زنبورا | تمام حقوق محفوظ ہیں | قدرت کے ساتھ مٹھاس <i className="fas fa-heart" style={{ color: 'var(--primary)' }}></i></p></div>
                </div>
            </footer>

            <a href="https://wa.me/923001234567?text=مجھے%20زنبورا%20شہد%20خریدنا%20ہے" className="whatsapp-float" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>

            {/* Cart Modal */}
            <div className={`modal-overlay ${isCartOpen ? 'active' : ''}`} onClick={() => setIsCartOpen(false)}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={() => setIsCartOpen(false)}><i className="fas fa-times"></i></button>
                    <h3>🛒 آپ کی کارٹ</h3>
                    {cart.length === 0 ? (
                        <div className="empty-cart-msg">کارٹ خالی ہے</div>
                    ) : (
                        <>
                            {cart.map(item => (
                                <div className="cart-item" key={item.id}>
                                    <div><div>{item.name}</div><div>Rs {item.price} x {item.quantity}</div></div>
                                    <div>
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ margin: '0 5px', padding: '5px 10px', cursor: 'pointer' }}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ margin: '0 5px', padding: '5px 10px', cursor: 'pointer' }}>+</button>
                                        <button onClick={() => removeItem(item.id)} style={{ marginRight: '12px', background: 'none', border: 'none', color: '#c0392b', cursor: 'pointer' }}><i className="fas fa-trash"></i></button>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                    <div className="cart-total">کل: Rs {cartTotal}</div>
                    <button className="clear-cart-btn" onClick={clearCart}>کارٹ خالی کریں</button>
                </div>
            </div>

            {/* Auth Modal */}
            <div className={`modal-overlay ${isAuthOpen ? 'active' : ''}`} onClick={() => setIsAuthOpen(false)}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={() => setIsAuthOpen(false)}><i className="fas fa-times"></i></button>
                    <div className="modal-tabs">
                        <button className={`tab-btn ${activeAuthTab === 'login' ? 'active' : ''}`} onClick={() => setActiveAuthTab('login')}>داخلہ</button>
                        <button className={`tab-btn ${activeAuthTab === 'register' ? 'active' : ''}`} onClick={() => setActiveAuthTab('register')}>اندراج</button>
                    </div>
                    {activeAuthTab === 'login' ? (
                        <div>
                            <div className="form-group"><label>ای میل یا موبائل نمبر</label><input type="text" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="example@email.com" /></div>
                            <div className="form-group"><label>پاس ورڈ</label><input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="••••••••" /></div>
                            <button className="modal-btn" onClick={handleLogin}>داخل ہوں</button>
                            <div className="form-switch">کیا آپ نیا ہیں؟ <span onClick={() => setActiveAuthTab('register')}>اندراج کریں</span></div>
                        </div>
                    ) : (
                        <div>
                            <div className="form-group"><label>مکمل نام</label><input type="text" value={regName} onChange={(e) => setRegName(e.target.value)} placeholder="علی احمد" /></div>
                            <div className="form-group"><label>ای میل</label><input type="email" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} placeholder="example@email.com" /></div>
                            <div className="form-group"><label>پاس ورڈ</label><input type="password" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} placeholder="کم از کم 6 حروف" /></div>
                            <button className="modal-btn" onClick={handleRegister}>اندراج کریں</button>
                            <div className="form-switch">پہلے سے رکن ہیں؟ <span onClick={() => setActiveAuthTab('login')}>داخلہ کریں</span></div>
                        </div>
                    )}
                </div>
            </div>

            {/* Search Modal */}
            <div className={`modal-overlay ${isSearchOpen ? 'active' : ''}`} onClick={() => setIsSearchOpen(false)}>
                <div className="modal-container search-container" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={() => setIsSearchOpen(false)}><i className="fas fa-times"></i></button>
                    <h3>تلاش کریں</h3>
                    <div className="search-input-group">
                        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="شہد، مصنوعات..." onKeyPress={(e) => e.key === 'Enter' && handleSearch()} />
                        <button onClick={handleSearch}><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;