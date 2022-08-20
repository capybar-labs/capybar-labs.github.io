<script lang="ts">
  let taxa = 12;
  let isGrupoFreteGratis = false;
  let valorACobrar = 0;
  let valorAReceber = 50;

  const aplicarTaxa = () => {
    return (100 - (taxa + (isGrupoFreteGratis ? 6 : 0)));
  }
  const atualizar = () => {
    valorAReceber = +(
      (valorACobrar * aplicarTaxa()) / 100
    ).toFixed(2);
  };

  const atualizar2 = () => {
    valorACobrar = +(
      (valorAReceber / aplicarTaxa()) * 100
    ).toFixed(2);
  };

  atualizar2();
</script>

<div class="calculadora">
  <label
    >Valor a receber:
    <input
      bind:value={valorAReceber}
      on:input={() => atualizar2()}
      on:change={() => atualizar2()}
      type="number"
      placeholder="quanto você pretende receber"
    />
  </label>

  <label
    >Taxa (%):
    <input
      bind:value={taxa}
      on:input={() => atualizar2()}
      on:change={() => atualizar2()}
      type="number"
      placeholder="digite a taxa"
    />
  </label>

  <button
    class:active={isGrupoFreteGratis}
    on:click={() => {
      isGrupoFreteGratis = !isGrupoFreteGratis;
      atualizar2();
    }}>Grupo Frete Grátis (+6%): {isGrupoFreteGratis ? "Sim" : "Não"}</button
  >

  <label
    >Valor a cobrar:
    <input
      bind:value={valorACobrar}
      on:input={() => atualizar()}
      on:change={() => atualizar()}
      type="number"
      placeholder="quanto terá que cobrar"
    />
  </label>
</div>

<style>
  .active {
    background-color: #ff3e00;
    color: white;
  }
  label {
    display: block;
  }
  .calculadora {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
</style>
