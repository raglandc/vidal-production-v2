
<script lang="ts">
    export let warning:string;
</script>

<div class="warning-container">
    <p class="expoint">!</p>
    <p class="warning-text">{warning}</p>
</div>

<style>
    .warning-container{
        background-color:#fef08a75;
        color: #111;
        border-radius: var(--border-radius);
        display: flex;
        align-items: center;
    }

    p {
        padding: 0;
        margin: 0;
    }

    .expoint {
        margin: 1.5rem;
        font-size: 3rem;
    }

    .warning-text{
        padding: 1.5rem 1rem;
        text-align: center;
    }
</style>


