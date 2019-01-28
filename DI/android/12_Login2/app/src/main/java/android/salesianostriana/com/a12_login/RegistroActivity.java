package android.salesianostriana.com.a12_login;

import android.content.Intent;
import android.salesianostriana.com.a12_login.model.Registro;
import android.salesianostriana.com.a12_login.retrofit.generator.ServiceGenerator;
import android.salesianostriana.com.a12_login.retrofit.services.LoginReponse;
import android.salesianostriana.com.a12_login.retrofit.services.LoginService;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class RegistroActivity extends AppCompatActivity {

        EditText nombre, editEmail, editPassword;
        Button btnRegistro, btnLogin;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_registro);

        nombre = findViewById(R.id.editNombre);
        editEmail = findViewById(R.id.editEmail);
        editPassword = findViewById(R.id.editPassword);
        btnRegistro = findViewById(R.id.buttonRegistroOK);


        btnRegistro.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String name = nombre.getText().toString().trim();
                String email = editEmail.getText().toString().trim();
                String password = editPassword.getText().toString().trim();

                Registro registro = new Registro(name,email,password);
                LoginService service = ServiceGenerator.createService(LoginService.class);

                Call<LoginReponse> loginReponseCall = service.doRegister("lNeTI8waAqmpUZa7QSiLv53rqSnlsldv",registro);

                loginReponseCall.enqueue(new Callback<LoginReponse>(){

                    @Override
                    public void onResponse(Call<LoginReponse> call, Response<LoginReponse> response) {

                        if(response.code() == 201){
                            //startActivity(new Intent(RegistroActivity.this, NuevaClase.class));
                            Toast.makeText(RegistroActivity.this, "Registrado y logueado con éxito", Toast.LENGTH_SHORT).show();
                            Log.d("token", response.body().getToken());
                        }else{
                            Toast.makeText(RegistroActivity.this, "Error en el registro, compruebe sus datos.", Toast.LENGTH_SHORT).show();
                        }

                    }

                    @Override
                    public void onFailure(Call<LoginReponse> call, Throwable t) {
                        Log.e("NetworkFaiulure", t.getMessage());
                        Toast.makeText(RegistroActivity.this, "Error de conexión", Toast.LENGTH_SHORT).show();

                    }
                });



            }
        });


    }
}
