import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Welcome to Beauty Saloon API' })
  @ApiResponse({
    status: 200,
    description: `
    The Beauty Saloon API is a comprehensive solution designed to streamline the management and operations of beauty salons. This API provides a robust set of endpoints that allow for the efficient handling of customers, appointments, and staff members, ensuring a seamless experience for both salon staff and clients.

    Key Features:

    - **Customer Management**: Easily create, update, retrieve, and delete customer information, including contact details and personal preferences.
    - **Appointment Scheduling**: Manage appointments with features to book, update, and cancel sessions, ensuring optimal salon operations and customer satisfaction.
    - **Staff Management**: Handle staff information and schedules, ensuring that the right professionals are available for each service.
    - **Service Catalog**: Maintain a catalog of services offered by the salon, including descriptions, pricing, and duration.
    - **Reporting and Analytics**: Gain insights into salon performance with detailed reporting and analytics capabilities.

    API Endpoints:

    - **Customer Endpoints**:
      - \`POST /customers\`: Create a new customer.
      - \`GET /customers\`: Retrieve all customers.
      - \`GET /customers/:id\`: Retrieve a customer by ID.
      - \`GET /customers/name/:customerName\`: Retrieve customers by name.
      - \`GET /customers/telephone/:telephoneNumber\`: Retrieve customers by telephone number.
      - \`DELETE /customers/:id\`: Delete a customer by ID.

    - **Appointment Endpoints**:
      - \`POST /appointments\`: Schedule a new appointment.
      - \`GET /appointments\`: Retrieve all appointments.
      - \`GET /appointments/:id\`: Retrieve an appointment by ID.
      - \`GET /appointments/customer/:customerId\`: Retrieve appointments for a specific customer.
      - \`DELETE /appointments/:id\`: Cancel an appointment by ID.

    - **Attendant Endpoints**:
      - \`POST /attendantss\`: Create a new Attendant
    
      - **Staff Endpoints**:
      - \`POST /staff\`: Add a new staff member.
      - \`GET /staff\`: Retrieve all staff members.
      - \`GET /staff/:id\`: Retrieve a staff member by ID.
      - \`DELETE /staff/:id\`: Remove a staff member by ID.

    - **Service Endpoints**:
      - \`POST /services\`: Add a new service.
      - \`GET /services\`: Retrieve all services.
      - \`GET /services/:id\`: Retrieve a service by ID.
      - \`DELETE /services/:id\`: Remove a service by ID.

    Authentication and Security:

    The Beauty Saloon API uses JWT (JSON Web Tokens) for authentication and authorization, ensuring secure access to the endpoints. Each request must include a valid token to access protected routes.

    Error Handling:

    The API provides comprehensive error handling, with clear and descriptive error messages. Common HTTP status codes used include:
    - \`200 OK\`: The request was successful.
    - \`201 Created\`: A new resource has been created.
    - \`400 Bad Request\`: The request was invalid or cannot be served.
    - \`401 Unauthorized\`: Authentication is required and has failed or has not yet been provided.
    - \`404 Not Found\`: The requested resource could not be found.
    - \`500 Internal Server Error\`: An error occurred on the server.

    Getting Started:

    To get started with the Beauty Saloon API, refer to the API documentation available at \`http://localhost:3000/api\`. The documentation provides detailed information about each endpoint, including request and response formats, parameters, and example requests.

    Conclusion:

    The Beauty Saloon API is a powerful tool for managing beauty salon operations, providing all the necessary features to ensure a smooth and efficient workflow. Whether you're managing customer relationships, scheduling appointments, or handling staff schedules, this API has got you covered.
    `,
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
