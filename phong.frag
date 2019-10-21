
#version 330 core
out vec4 color;

in vec3 FragPos;  
in vec3 Normal;  

uniform vec3 lightPos; 
uniform vec3 viewPos;
uniform vec3 lightColor;
uniform vec3 objectColor;
lightingShader.setVec3("lightPos", lightPos);  
void main()
{
    // TODO: Replace with your code...
	// ambient lighting
	 float ambientStrength = 0.1;
    vec3 ambient = ambientStrength * lightColor;

	// diffuse lighting
	vec3 norm = normalize(Normal);
	vec3 lightDir = normalize(lightPos - FragPos);  
	float diff = max(dot(norm, lightDir), 0.0);
	vec3 diffuse = diff * lightColor;

	//specular lighing
	float specularStrength = 0.5;
	vec3 viewDir = normalize(viewPos - FragPos);
	vec3 reflectDir = reflect(-lightDir, norm);  
	float spec = pow(max(dot(viewDir, reflectDir), 0.0), 16);
	vec3 specular = specularStrength * spec * lightColor; 

	vec3 result = (ambient + diffuse + specular) * objectColor;
	FragColor = vec4(result, 1.0);

    // If gl_Position was set correctly, this gives a totally red cube
    color = vec4(vec3(1.f,0.f,0.f), 1.0f);
} 
