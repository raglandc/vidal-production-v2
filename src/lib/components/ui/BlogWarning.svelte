
<script lang="ts">
    export let warning:string;
</script>

<div class="warning-container">
    <p>{warning}</p>
</div>

<style>
    .warning-container{
        background-color:#fef08a75;
        color: #111;
        border-radius: var(--border-radius);
    }
    p{
        width: 100%;
        padding: 1.5rem 1rem;
        text-align: center;
    }
</style>


