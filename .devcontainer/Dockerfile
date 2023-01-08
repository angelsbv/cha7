FROM mcr.microsoft.com/devcontainers/base:alpine-3.17

RUN apk update && apk add curl git unzip xz gzip zip mesa-gl openjdk8 wget

SHELL ["/bin/bash", "--login", "-c"]

WORKDIR /home

# Installing Flutter
RUN mkdir -p android/sdk
ENV ANDROID_SDK_ROOT /home/android/sdk
RUN mkdir -p .android && touch .android/repositories.cfg

RUN wget -O sdk-tools.zip https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
RUN unzip sdk-tools.zip && rm sdk-tools.zip
RUN mv tools android/sdk/tools
RUN cd android/sdk/tools/bin && yes | ./sdkmanager --licenses
RUN cd android/sdk/tools/bin && ./sdkmanager "build-tools;29.0.2" "patcher;v4" "platform-tools" "platforms;android-29" "sources;android-29"
ENV PATH "$PATH:/home/android/sdk/platform-tools"

RUN git clone https://github.com/flutter/flutter.git -b stable
ENV PATH "$PATH:/home/flutter/bin"

RUN export GLIBC_URL="https://github.com/sgerrand/alpine-pkg-glibc"; \
    export GLIBC_VERSION="2.29-r0"; \
    mkdir -p /tmp/glibc; \
    wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub; \
    wget -O /tmp/glibc/glibc.apk ${GLIBC_URL}/releases/download/${GLIBC_VERSION}/glibc-${GLIBC_VERSION}.apk; \
    wget -O /tmp/glibc/glibc-bin.apk ${GLIBC_URL}/releases/download/${GLIBC_VERSION}/glibc-bin-${GLIBC_VERSION}.apk;

RUN apk --no-cache add --force-overwrite /tmp/glibc/glibc.apk /tmp/glibc/glibc-bin.apk \
    -u alpine-keys --allow-untrusted \
    && rm -rf /tmp/* /var/lib/apt/lists/* /var/cache/apk/* \
    /usr/share/man/* /usr/share/doc \
    && dart --disable-analytics && flutter config --no-analytics \
    && flutter doctor && flutter precache --universal

# Installing Node, Nest CLI
ARG NODE_VERSION="18.13.0"
ARG NESTCLI_VERSION="9.1.8"

RUN mkdir /usr/local/nvm
ENV NVM_DIR /usr/local/nvm
ENV NVM_INSTALL_PATH $NVM_DIR/versions/node/v${NODE_VERSION}
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
RUN source $NVM_DIR/nvm.sh \
   && nvm install ${NODE_VERSION} \
   && nvm alias default ${NODE_VERSION} \
   && nvm use default
ENV NODE_PATH $NVM_INSTALL_PATH/lib/node_modules
ENV PATH $NVM_INSTALL_PATH/bin:$PATH

RUN npm i -g @nestjs/cli@${NESTCLI_VERSION}