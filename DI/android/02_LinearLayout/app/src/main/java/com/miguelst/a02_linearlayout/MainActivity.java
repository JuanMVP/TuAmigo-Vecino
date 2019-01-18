package com.miguelst.a02_linearlayout;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {
    Button btnLogin;
    Button btnRegister;
    EditText editTextEmail,editTextPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        // la siguiente linea debeis tatuarla en el brazo
        // hacerte una camiseta con ella o ponerla en el baño.
        // para verla todas las mañanas.
        btnLogin = findViewById(R.id.buttonLogin);
        btnRegister = findViewById(R.id.buttonRegister);
        editTextEmail =  findViewById(R.id.editTextEmail);
        editTextPassword = findViewById(R.id.editTextPassword);

        //Cambio el texto del botón de iniciar sesión
        btnLogin.setText("Iniciar Sesion");

        //Declaración del metodo click sobre el boton
        btnLogin.setOnClickListener(this);
        btnRegister.setOnClickListener(this);


        // Ocultar el toolbar en esta pantalla
        getSupportActionBar().hide();


    }

    @Override
    public void onClick(View v) {
        int id = v.getId();

        if(id == R.id.buttonLogin){
            String email = editTextEmail.getText().toString();
            String password = editTextPassword.getText().toString();

            if(email.equals("admin@admin.com")
                    && password.equals("1234")){
                Toast.makeText(this, "Login Ok =) ", Toast.LENGTH_LONG).show();

                //Como el login ha sido correcto reseteo los campos de texto
                editTextEmail.setText("");
                editTextPassword.setText("");
            }else{
                editTextEmail.setError("Email y/o contraseña incorrecto");
            }

        }else{

        }

    }
}
