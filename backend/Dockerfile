# Use an official Python runtime as a parent image
FROM python:3.6
# FROM django
# ENV LC_ALL C.UTF-8
# ENV LANG C.UTF-8

# FROM base AS build

# RUN pip install pipenv
# Backend directory 
# WORKDIR /app/backend
# RUN ls -al
# Python dependencies/Pipfiles
# COPY Pipfile Pipfile
# COPY Pipfile.lock Pipfile.lock
# RUN pip install --upgrade pip
# COPY requirements.txt /app/backend/requirements.txt
# RUN pip install -r requirements.txt
# RUN pipenv install --system

# Add the rest of the code
# COPY . /app/backend/

# Make port 8000 available for the app
# EXPOSE 8000
# RUN ls
# Be sure to use 0.0.0.0 for the host within the Docker container,
# otherwise the browser won't be able to find it
# CMD ls
# CMD cd src
# CMD ls
# CMD python manage.py runserver 0.0.0.0:8000

# set work directory
WORKDIR /faves/backend

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt /faves/backend/requirements.txt
RUN pip install -r requirements.txt

# copy project
COPY . /faves/backend/

EXPOSE 8000
CMD python manage.py runserver 0.0.0.0:8000