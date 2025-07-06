# Hey Bible App API Clients

A collection of auto-generated API clients for the Hey Bible App API in multiple programming languages. These clients provide easy access to Bible verses, notes, and images through type-safe interfaces.

## 🌍 Available Clients

| Language   | Directory      | Status | Package Name         |
|------------|----------------|--------|---------------------|
| TypeScript | `typescript/`  | ✅ Ready | `hey-bible-client`  |

## 🚀 Quick Start

Each client has its own documentation with installation and usage instructions. See the README in each language's directory for specific setup instructions.

## 📁 Project Structure

```
hey-bible-client/
├── openapi.yaml                 # OpenAPI specification
├── typescript/                 # TypeScript client
│   ├── src/                    # Generated source code
│   ├── dist/                   # Built JavaScript files
│   └── README.md               # TypeScript-specific docs
└── README.md                   # This file
```

## 🛠️ Generating New Clients

### Prerequisites

You'll need the OpenAPI Generator CLI:

```bash
# Install globally
npm install -g @openapitools/openapi-generator-cli

# Or use with npx (recommended)
npx @openapitools/openapi-generator-cli version
```

### Generate a Client

Use the following commands to generate clients for different languages:

#### TypeScript (Fetch-based)
```bash
npx @openapitools/openapi-generator-cli generate \
  -i openapi.yaml \
  -g typescript-fetch \
  -o ./typescript \
  --additional-properties=typescriptThreePlus=true,withInterfaces=true,npmName=hey-bible-client
```

#### Python
```bash
npx @openapitools/openapi-generator-cli generate \
  -i openapi.yaml \
  -g python \
  -o ./python \
  --additional-properties=packageName=hey_bible_client,projectName=hey-bible-client-python
```

#### Java
```bash
npx @openapitools/openapi-generator-cli generate \
  -i openapi.yaml \
  -g java \
  -o ./java \
  --additional-properties=groupId=com.heybible,artifactId=hey-bible-client,apiPackage=com.heybible.client.api,modelPackage=com.heybible.client.model
```

#### Go
```bash
npx @openapitools/openapi-generator-cli generate \
  -i openapi.yaml \
  -g go \
  -o ./go \
  --additional-properties=packageName=heybibleclient,moduleName=github.com/heybible/hey-bible-go-client
```

### Available Generators

To see all available generators:

```bash
npx @openapitools/openapi-generator-cli list
```

Popular options include:
- `typescript-fetch` - TypeScript with Fetch API
- `python` - Python client
- `java` - Java client
- `go` - Go client
- `csharp` - C# client
- `php` - PHP client
- `ruby` - Ruby client
- `rust` - Rust client

## 📦 Installing Generated Clients

See the README in each language's directory for specific installation instructions.

## 📖 API Documentation

The clients provide access to three main endpoints:

### 🙏 Verses
- Get all verses with pagination
- Get a specific verse by ID
- Includes associated notes and images

### 📝 Notes
- Get all notes with pagination
- Get a specific note by ID
- Includes associated verse information

### 🖼️ Images
- Get all images with pagination
- Get a specific image by ID (with signed URL)
- Includes associated verse information

For detailed API documentation, see the [OpenAPI specification](openapi.yaml).

## 🔑 Authentication

All clients require an API key for authentication. Get your API key from the Hey Bible App dashboard.

## 🌟 Features

- **🔒 Type-safe** - Full type safety in supported languages
- **🌐 Modern** - Uses contemporary HTTP clients (Fetch, requests, etc.)
- **📦 Lightweight** - Minimal dependencies
- **🚀 Fast** - Optimized for performance
- **📖 Well-documented** - Comprehensive documentation for each client
- **🔧 Flexible** - Works across different environments

## 🛠️ Development

### Updating the API

1. Update `openapi.yaml` with your changes
2. Regenerate clients for all languages:
   ```bash
   # TypeScript
   npm run gen:ts
   npm run build
   ```
3. Test the changes
4. Update version numbers and publish

### Adding a New Language

1. Generate the client using the OpenAPI Generator
2. Add language-specific configuration
3. Create a README for the language
4. Add installation and usage instructions
5. Update this main README

## 📋 Examples

See language-specific examples in each client's README:
- [TypeScript Examples](typescript/README.md#usage-examples)
- Python Examples (coming soon)
- Java Examples (coming soon)

## 🤝 Contributing

1. Fork the repository
2. Make your changes to the OpenAPI specification
3. Regenerate the affected clients
4. Test your changes
5. Submit a pull request

## 📞 Support

- **API Issues**: Contact the Hey Bible App team
- **Client Issues**: Open an issue in this repository
- **Documentation**: Check language-specific READMEs in each directory

---

Generated with ❤️ using [OpenAPI Generator](https://openapi-generator.tech/) 