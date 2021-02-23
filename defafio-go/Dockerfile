FROM golang:1.15.8-alpine3.13 AS builder

WORKDIR /go/src/desafio-go

COPY desafio-go/ .

RUN go build -ldflags=-w

FROM scratch

WORKDIR /

COPY --from=builder /go/src/desafio-go/desafio-go .

ENTRYPOINT ["/desafio-go"]
