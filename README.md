# I4PRO - Challenge

This Agenda is a challenge app create with C# ASP.NET Core 3 and that use EF Core to interact with database on the Background.
They also have a configuration of Migration, just need check the instructions below in "Getting Started" to create the database.
For the frontend we have Angular 2+ to design the component and their behaviors.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What we need installed in our environment before try use this project.

* [SDK do .NET Core](https://www.microsoft.com/net/download/core) 3
* [NodeJS](https://nodejs.org/en) - Version 7 or later
* [Visual Studio](https://visualstudio.microsoft.com/pt-br/vs/) - 2017 or later

### Installing

Clone or Download the zip file of this repository.

The steps bellow, it's to configurate the Frontend application.

Install Angular Cli with NPM running the command bellow on CMD.
```
npm install -g @angular/cli
```

Install the packages with NPM running the command bellow on CMD inside the folder of frontend application (~/i4-challenge-frontend/).
```
npm install
```

After install packages and Angular Cli we can prepare the solution of Visual Studio.
So, open the solution file (i4-challenge-backend.sln).
Restore all nuget packages and rebuild solution.

So now, before we execute or application, we need create our database based on the file migration "Initial Create".
On Package Manage Console (TOOLS -> NuGet Package Manager -> Package Manager Console), execute the command below:

```
EntityFrameworkCore\Update-Database
```

After the command finish we can run our application.

## Running

In the frontend folder, we can run the command "ng serve" to start the Angular app.
```
ng serve
```
That will be running on http://localhost:4200 .

And for the api of Visual Studio, just press F5 to start the service with IIS Express configurate to running on https://localhost:44397/ .
*This is important because or Angular App is setup to call their actions to this local.

## Author

* **Filipe Maia** - [Linkedin](https://www.linkedin.com/in/filipe-maia/)