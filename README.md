# 📢 NewsFeed Application

## Project Overview 📰

The NewsFeed Application is a cloud-powered digital news platform designed using a microservices architecture to enhance news consumption. The project was developed as part of the Software and Data Engineering (CSL7090) course under the supervision of Dr. Sumit Kalra.

## Table of Contents 📚

1. [Introduction](#introduction)
2. [Architecture and Technology Stack](#architecture-and-technology-stack)
3. [Microservice Details](#microservice-details)
4. [AWS Deployment](#aws-deployment)
5. [Key Features](#key-features)
6. [Future Directions](#future-directions)
7. [References](#references)

## Introduction 🌟

The BreakingNews application reimagines digital news consumption by employing a sophisticated microservices architecture hosted on the cloud. It ensures modularity, flexibility, and scalability while providing a seamless and user-centric experience.

## Architecture and Technology Stack 🏗️

### Microservices Architecture

- **Modularity and Manageability**: The application is divided into smaller, independently deployable units.
- **Scalability**: Specific microservices can scale based on demand.
- **Flexibility and Independence**: Changes in one microservice do not affect others.
- **Technology Diversity**: Each microservice can use different technologies.
- **Fault Isolation**: Issues in one microservice do not affect others.

### Technology Stack

- **Frontend**: ReactJS ⚛️
- **Backend**: NodeJS 🟢
- **Authentication**: Auth0 🔒
- **Payment Gateway**: RazorPay 💳
- **Cloud Infrastructure**: AWS ☁️
- **Containerization**: Docker 🐳

## Microservice Details 🔍

### Authentication Microservice

- **Functionality**: Manages Single Sign-On (SSO) for secure user authentication using Auth0.
- **Features**: Secure login/logout processes, password management, token-based authentication for microservices communication.

### Payment Microservice

- **Functionality**: Facilitates buying news subscriptions with secure transactions using RazorPay.
- **Features**: Streamlined checkout process, secure handling of payment information, integration with Cart microservice.

### Cart Microservice

- **Functionality**: Manages news subscriptions in a centralized cart.
- **Features**: Adding/modifying subscriptions, real-time updates, integration with RazorPay for checkout.

### News Fetch Microservice

- **Functionality**: Retrieves news content based on user preferences.
- **Features**: Real-time updates from NEWSAPI.org, tailored content delivery.

## AWS Deployment 🌐

### Benefits

- **Scalability**: Elastic scaling to accommodate varying levels of user traffic.
- **Global Reach**: Low-latency access worldwide.
- **Flexibility**: Tailored infrastructure configurations.
- **Reliability**: High availability and minimal downtime.
- **Cost-Efficiency**: Pay-as-you-go model.
- **Security**: Robust security features including encryption and network security.

## Key Features ✨

- **Personalized Content**: Tailored news retrieval based on user preferences.
- **User-Friendly Interface**: Intuitive design for easy navigation and customization.
- **Secure Transactions**: Simplified and secure subscription transactions with RazorPay.
- **Robust Authentication**: Auth0-powered Single Sign-On for user security.
- **Dynamic Scalability**: Adaptation to changing user demands for optimal performance.

## Future Directions 🚀

- **Advanced Personalization**: Enhanced algorithms for more personalized news content.
- **Enhanced Security Measures**: Additional technologies for fortified user data protection.
- **Emerging Technologies**: Integration of machine learning and natural language processing.
- **Global Expansion**: Multilingual support and culturally tailored news content.
- **User-Generated Content**: Features for users to contribute and share content.
- **Continuous Optimization**: Performance tuning, load testing, and infrastructure enhancements.

## References 🔗

- [React Router](https://reactrouter.com/en/main)
- [Docker Documentation](https://docs.docker.com/desktop/)
- [Auth0](https://auth0.com/)
- [RazorPay Integration](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/)
- [NEWSAPI](https://newsapi.org/)
- [Building Microservices with Node.js](https://blog.logrocket.com/building-microservices-node-js/)
- Periwal, Nikit, et al. "News Curation, Abstract, and Recommender App using Deep Learning Attention Models." 2022 International Conference on Edge Computing and Applications (ICECAA). IEEE, 2022. [Reference Paper](https://ieeexplore.ieee.org/document/9936420)
