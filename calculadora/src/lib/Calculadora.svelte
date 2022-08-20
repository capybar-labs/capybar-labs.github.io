<script lang="ts">
  import { taxaLocalStorage, cobrarLocalStorage, receberLocalStorage } from "./stores"

	let taxa = '12';
	let isGrupoFreteGratis = false;
	let valorACobrar = '0';
	let valorAReceber = '50';

	const aplicarTaxa = () => {
		return 100 - (+taxa + (isGrupoFreteGratis ? 6 : 0));
	};

	const atualizar = () => {
		valorAReceber = ((+valorACobrar * aplicarTaxa()) / 100).toFixed(2);
	};

	const atualizar2 = () => {
		valorACobrar = ((+valorAReceber / aplicarTaxa()) * 100).toFixed(2);
	};

  const aplicarPersistencia = () => {
    cobrarLocalStorage.set(+valorACobrar);
    receberLocalStorage.set(+valorAReceber);
    taxaLocalStorage.set(+taxa);
  }

  const obterDados = () => {
    cobrarLocalStorage.subscribe((value) => valorACobrar = value?.toString());
    receberLocalStorage.subscribe((value) => valorAReceber = value?.toString());
    taxaLocalStorage.subscribe((value) => taxa = value?.toString());
  }

  obterDados();
  atualizar2();
</script>

<div class="calculadora">
	<label
  title="O quanto você pretende receber"
  >Valor a receber:
		<input
			bind:value={valorAReceber}
			on:input={() => {atualizar2(); aplicarPersistencia();}}
			on:change={() => {atualizar2(); aplicarPersistencia();}}
			type="number"
		/>
	</label>

	<label
		>Taxa (%):
		<input
			bind:value={taxa}
			on:input={() => {atualizar2(); aplicarPersistencia();}}
			on:change={() => {atualizar2(); aplicarPersistencia();}}
			type="number"
		/>
	</label>

	<label
    title='O quanto você terá que cobrar para receber o montante em "Valor a receber"'
		>Valor a cobrar:
		<input
			bind:value={valorACobrar}
			on:input={() => {atualizar(); aplicarPersistencia();}}
			on:change={() => {atualizar(); aplicarPersistencia();}}
			type="number"
		/>
	</label>
</div>

<style>
	label {
		display: block;
	}
	.calculadora {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
</style>
